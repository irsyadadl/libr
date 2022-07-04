### Laravel with Bootstrap & React
Follow these steps, and you good to go!

```bash
git clone https://github.com/irsyadadl/libr.git
cd libr
composer install
cp .env.example .env
php artisan key:generate
npm install
npm run dev
```

Create your database, and now you can migrate!
```bash
php artisan migrate
```


---
This project is composed of several open sources that may not be able to list all of them, but here are some that I can show you.
* [Laravel](https://github.com/laravel/laravel) (v9.19.0)
* [React](https://github.com/facebook/react) (v17.0.2)
* [Sass](https://github.com/sass/sass) (v1.53.0)
* [Vite](https://github.com/vitejs/vite) (v2.9.11)
* [Bootstrap](https://github.com/twbs/bootstrap) (v5.2.0-beta1)
* [Clsx](https://github.com/lukeed/clsx) (1.2.0)
* [Inertiajs](https://github.com/inertiajs) (v0.11.0)
* [Prettier](https://github.com/prettier/prettier) (v2.7.1)
* [Laravel Vite Plugin](https://github.com/laravel/vite-plugin) (v0.2.1)

For more information, just type `npm fund` and `composer fund` too see what inside!
