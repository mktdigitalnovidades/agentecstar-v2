<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="header">
    <div class="container">
        <div class="header-content">
            <!-- Logo -->
            <div class="logo">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <a href="<?php echo esc_url(home_url('/')); ?>" rel="home">
                        <?php if (get_theme_mod('logo_image')) : ?>
                            <img src="<?php echo esc_url(get_theme_mod('logo_image')); ?>" alt="<?php bloginfo('name'); ?>" />
                        <?php else : ?>
                            <h1 style="color: white; margin: 0; font-size: 1.5rem; font-weight: 700;">
                                <?php bloginfo('name'); ?>
                            </h1>
                        <?php endif; ?>
                    </a>
                <?php endif; ?>
            </div>

            <!-- Desktop Navigation -->
            <nav class="nav-menu">
                <a href="#services">Serviços</a>
                <a href="#benefits">Benefícios</a>
                <a href="#how-it-works">Como Funciona</a>
                <a href="#testimonials">Depoimentos</a>
                <a href="#faq">FAQ</a>
                <a href="<?php echo get_theme_mod('whatsapp_link', 'https://wa.me/5519992288312'); ?>" 
                   class="btn btn-primary" target="_blank" rel="noopener">
                    Contato
                </a>
            </nav>

            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" onclick="toggleMobileMenu()">
                <svg class="menu-icon" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg class="close-icon hidden" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobileMenu">
            <nav>
                <a href="#services" onclick="closeMobileMenu()">Serviços</a>
                <a href="#benefits" onclick="closeMobileMenu()">Benefícios</a>
                <a href="#how-it-works" onclick="closeMobileMenu()">Como Funciona</a>
                <a href="#testimonials" onclick="closeMobileMenu()">Depoimentos</a>
                <a href="#faq" onclick="closeMobileMenu()">FAQ</a>
                <a href="<?php echo get_theme_mod('whatsapp_link', 'https://wa.me/5519992288312'); ?>" 
                   class="btn btn-primary" target="_blank" rel="noopener" onclick="closeMobileMenu()">
                    Contato
                </a>
            </nav>
        </div>
    </div>
</header>

<script>
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    
    if (!mobileMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
        closeMobileMenu();
    }
});
</script>