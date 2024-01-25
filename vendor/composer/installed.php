<?php return array(
    'root' => array(
        'name' => 'october/pensoft-coop4cbd-theme',
        'pretty_version' => 'dev-main',
        'version' => 'dev-main',
        'reference' => 'e6c124a0376aea423cb920d20c583d3c72cafb24',
        'type' => 'october-theme',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => true,
    ),
    'versions' => array(
        'composer/installers' => array(
            'pretty_version' => 'v1.12.0',
            'version' => '1.12.0.0',
            'reference' => 'd20a64ed3c94748397ff5973488761b22f6d3f19',
            'type' => 'composer-plugin',
            'install_path' => __DIR__ . '/./installers',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'october/pensoft-coop4cbd-theme' => array(
            'pretty_version' => 'dev-main',
            'version' => 'dev-main',
            'reference' => 'e6c124a0376aea423cb920d20c583d3c72cafb24',
            'type' => 'october-theme',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'roundcube/plugin-installer' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => '*',
            ),
        ),
        'shama/baton' => array(
            'dev_requirement' => false,
            'replaced' => array(
                0 => '*',
            ),
        ),
    ),
);
