const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const { env } = require('.');
const databasePath = path.join(__dirname, '..', 'database');


class Database {
  static init() {
    try {
      let connection = mysql.createConnection({
        host: env('DB_HOST'),
        user: env('DB_USERNAME'),
        password: env('DB_PASSWORD'),
        database: env('DB_DATABASE')  // Verifique se esta variável está corretamente definida
      });
      connection.connect(err => {
        if (err) {
          console.error('Database connection error:', err);
        } else {
          //console.log('Database connected successfully');
        }
      });
      return connection;
    } catch (error) {
      console.error('Database connection error:', error);
    }
  }

  //
  static applyMigrations() {
    const connection = this.init();
    if (!connection) return;

    const migrationsPath = path.join(databasePath, 'migrations');

    const migrationFiles = fs.readdirSync(migrationsPath).sort();

    // Apply down migrations in reverse order
    migrationFiles.slice().reverse().forEach(file => {
      const migration = require(path.join(migrationsPath, file));
      if (migration.down) {
        this.raw(migration.down, connection);
      }
    });

    // Apply up migrations in normal order
    migrationFiles.forEach(file => {
      const migration = require(path.join(migrationsPath, file));
      if (migration.up) {
        this.raw(migration.up, connection);
      }
    });

    connection.end();
  }

  //
  static migrateOnly(migration) {
    const connection = this.init();
    if (!connection) return;

    const migrationsPath = path.join(databasePath, 'migrations');

    const migrationFiles = fs.readdirSync(migrationsPath).sort();

    // Apply down migrations in reverse order
    migrationFiles.slice().reverse().forEach(file => {
      var currentFileName = file.split('_').pop().split('.')[0];
      if (migration == currentFileName) {
        const migration = require(path.join(migrationsPath, file));
        if (migration.down) {
          this.raw(migration.down, connection);
        }
      }
    });

    // Apply up migrations in normal order
    migrationFiles.forEach(file => {
      var currentFileName = file.split('_').pop().split('.')[0];
      if (migration == currentFileName) {
        const migration = require(path.join(migrationsPath, file));
        if (migration.up) {
          this.raw(migration.up, connection);
        }
      }
    });

    connection.end();
  }

  //
  static seed() {
    const connection = this.init();
    if (!connection) return;
    const seedersPath = path.join(databasePath, 'seeders');

    const seederFiles = fs.readdirSync(seedersPath).sort();

    seederFiles.forEach(file => {

      const seeder = require(path.join(seedersPath, file));
      if (seeder.values) {
        seeder.values.forEach(val => {
          this.raw(seeder.run, connection, val);
        });
      }
    });

    connection.end();
  }

  //
  static seedOnly(seeder) {
    const connection = this.init();
    if (!connection) return;
    const seedersPath = path.join(databasePath, 'seeders');

    const seederFiles = fs.readdirSync(seedersPath).sort();

    seederFiles.forEach(file => {
      var currentSeederFile = file.split('_').pop().split('.')[0];
      if (currentSeederFile == seeder) {
        const seeder = require(path.join(seedersPath, file));
        if (seeder.values) {
          seeder.values.forEach(val => {
            this.raw(seeder.run, connection, val);
          });
        }
      }
    });

    connection.end();
  }



  //
  static raw(sql, connection, data = []) {
    //console.log("Executing SQL:", sql);
    connection.query(sql, data, (err, res) => {
      if (err) {
        let error = {
          code: err.code,
          errno: err.errno,
          message: err.sqlMessage,
        };
        //console.log(sql);
        console.error('SQL Error:', error);
      } else {
        //console.log('SQL Executed:', sql);
      }
    });
  }

  static exec(sql, params) {
    return new Promise((resolve, reject) => {
      const connection = this.init();
      connection.query(sql, params, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
        connection.end();
      });
    });
  }
}

module.exports = Database;
