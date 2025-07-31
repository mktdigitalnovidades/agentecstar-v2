<?php
/**
 * AgentECStar functions and definitions
 *
 * @package AgentECStar
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme setup
 */
function agentestar_setup() {
    // Add theme support for various features
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 200,
        'flex-width'  => true,
        'flex-height' => true,
    ));
    add_theme_support('customize-selective-refresh-widgets');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'agentestar'),
        'footer'  => esc_html__('Footer Menu', 'agentestar'),
    ));
}
add_action('after_setup_theme', 'agentestar_setup');

/**
 * Enqueue scripts and styles
 */
function agentestar_scripts() {
    // Enqueue theme stylesheet
    wp_enqueue_style('agentestar-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue theme JavaScript
    wp_enqueue_script('agentestar-script', get_template_directory_uri() . '/js/theme.js', array(), '1.0.0', true);
    
    // Enqueue Google Fonts (optional)
    wp_enqueue_style('agentestar-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', array(), null);
}
add_action('wp_enqueue_scripts', 'agentestar_scripts');

/**
 * Add inline styles for custom colors
 */
function agentestar_custom_styles() {
    $custom_css = "
        :root {
            --brand-dark: #1a1847;
            --brand-navy: #2d2875;
            --brand-blue: #4a86c9;
            --brand-purple: #7b75b4;
            --brand-light-purple: #9358b1;
            --brand-accent: #5eb9c2;
        }
    ";
    wp_add_inline_style('agentestar-style', $custom_css);
}
add_action('wp_enqueue_scripts', 'agentestar_custom_styles');

/**
 * Customizer settings
 */
function agentestar_customize_register($wp_customize) {
    
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title'    => __('Hero Section', 'agentestar'),
        'priority' => 30,
    ));

    // Hero Badge Text
    $wp_customize->add_setting('hero_badge_text', array(
        'default'           => 'Inovação em IA',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('hero_badge_text', array(
        'label'   => __('Hero Badge Text', 'agentestar'),
        'section' => 'hero_section',
        'type'    => 'text',
    ));

    // Hero Brand Name
    $wp_customize->add_setting('hero_brand_name', array(
        'default'           => 'AgentECStar',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('hero_brand_name', array(
        'label'   => __('Brand Name', 'agentestar'),
        'section' => 'hero_section',
        'type'    => 'text',
    ));

    // Hero Subtitle
    $wp_customize->add_setting('hero_subtitle', array(
        'default'           => 'Automação com Inteligência Artificial',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('hero_subtitle', array(
        'label'   => __('Hero Subtitle', 'agentestar'),
        'section' => 'hero_section',
        'type'    => 'text',
    ));

    // Hero Description
    $wp_customize->add_setting('hero_description', array(
        'default'           => 'Transforme o atendimento da sua empresa com automações inteligentes no WhatsApp e Instagram usando IA de última geração.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('hero_description', array(
        'label'   => __('Hero Description', 'agentestar'),
        'section' => 'hero_section',
        'type'    => 'textarea',
    ));

    // Hero CTA Text
    $wp_customize->add_setting('hero_cta_text', array(
        'default'           => 'Agende uma consulta gratuita',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('hero_cta_text', array(
        'label'   => __('Primary CTA Text', 'agentestar'),
        'section' => 'hero_section',
        'type'    => 'text',
    ));

    // Hero Secondary CTA
    $wp_customize->add_setting('hero_secondary_cta', array(
        'default'           => 'Saiba mais',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('hero_secondary_cta', array(
        'label'   => __('Secondary CTA Text', 'agentestar'),
        'section' => 'hero_section',
        'type'    => 'text',
    ));

    // Contact Settings
    $wp_customize->add_section('contact_section', array(
        'title'    => __('Contact Settings', 'agentestar'),
        'priority' => 40,
    ));

    // WhatsApp Link
    $wp_customize->add_setting('whatsapp_link', array(
        'default'           => 'https://wa.me/5519992288312?text=Olá! Gostaria de saber mais sobre automação com IA.',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('whatsapp_link', array(
        'label'   => __('WhatsApp Link', 'agentestar'),
        'section' => 'contact_section',
        'type'    => 'url',
    ));

    // Services Section
    $wp_customize->add_section('services_section', array(
        'title'    => __('Services Section', 'agentestar'),
        'priority' => 50,
    ));

    // Services Title
    $wp_customize->add_setting('services_title', array(
        'default'           => 'Nossos Serviços',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('services_title', array(
        'label'   => __('Services Title', 'agentestar'),
        'section' => 'services_section',
        'type'    => 'text',
    ));

    // Services Subtitle
    $wp_customize->add_setting('services_subtitle', array(
        'default'           => 'Soluções completas de automação com IA para transformar seu atendimento',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('services_subtitle', array(
        'label'   => __('Services Subtitle', 'agentestar'),
        'section' => 'services_section',
        'type'    => 'textarea',
    ));

    // Contact Section
    $wp_customize->add_setting('contact_title', array(
        'default'           => 'Entre em Contato',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('contact_title', array(
        'label'   => __('Contact Title', 'agentestar'),
        'section' => 'contact_section',
        'type'    => 'text',
    ));

    $wp_customize->add_setting('contact_subtitle', array(
        'default'           => 'Vamos conversar sobre como podemos automatizar seu negócio',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control('contact_subtitle', array(
        'label'   => __('Contact Subtitle', 'agentestar'),
        'section' => 'contact_section',
        'type'    => 'textarea',
    ));
}
add_action('customize_register', 'agentestar_customize_register');

/**
 * Custom body classes
 */
function agentestar_body_classes($classes) {
    if (!is_singular()) {
        $classes[] = 'hfeed';
    }
    return $classes;
}
add_filter('body_class', 'agentestar_body_classes');

/**
 * Add smooth scroll behavior
 */
function agentestar_smooth_scroll() {
    ?>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Smooth scroll for anchor links
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
        }
    });
    </script>
    <?php
}
add_action('wp_footer', 'agentestar_smooth_scroll');

/**
 * Security enhancements
 */
// Remove WordPress version from head
remove_action('wp_head', 'wp_generator');

// Remove RSD link
remove_action('wp_head', 'rsd_link');

// Remove Windows Live Writer link
remove_action('wp_head', 'wlwmanifest_link');

// Disable XML-RPC
add_filter('xmlrpc_enabled', '__return_false');

/**
 * Performance optimizations
 */
// Remove emoji scripts
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_styles', 'print_emoji_styles');

// Disable embeds
function agentestar_disable_embeds() {
    remove_action('wp_head', 'wp_oembed_add_discovery_links');
    remove_action('wp_head', 'wp_oembed_add_host_js');
}
add_action('init', 'agentestar_disable_embeds', 9999);

/**
 * Add viewport meta tag
 */
function agentestar_viewport_meta() {
    echo '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">';
}
add_action('wp_head', 'agentestar_viewport_meta', 1);
?>