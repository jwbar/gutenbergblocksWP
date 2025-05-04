<?php
/**
 * Plugin Name: Team Members Block
 * Description: A Gutenberg block to showcase team member profiles.
 * Version: 1.0.0
 * Author: jwbar
 */

function tmb_register_block() {
    register_block_type(__DIR__);
}
add_action('init', 'tmb_register_block');


