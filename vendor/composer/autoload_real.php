<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitd63e5c6cc853d6e53c0a40d6c4280f8d
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitd63e5c6cc853d6e53c0a40d6c4280f8d', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitd63e5c6cc853d6e53c0a40d6c4280f8d', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitd63e5c6cc853d6e53c0a40d6c4280f8d::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
