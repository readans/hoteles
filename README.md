docker-compose up -d
modify .env [DB_PASSWORD, DB_USERNAME]
php artisan migrate
php artisan db:seed