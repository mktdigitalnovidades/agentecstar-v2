<?php
/**
 * The main template file
 *
 * @package AgentECStar
 */

get_header(); ?>

<main id="main" class="site-main">
    
    <!-- Hero Section -->
    <section id="hero" class="hero">
        <!-- Animated Background Elements -->
        <div class="hero-bg-elements">
            <div class="hero-bg-circle-1"></div>
            <div class="hero-bg-circle-2"></div>
            <div class="hero-bg-center"></div>
        </div>

        <!-- Grid Pattern Overlay -->
        <div class="hero-grid"></div>

        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <div class="hero-badge">
                        <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span><?php echo get_theme_mod('hero_badge_text', 'Inovação em IA'); ?></span>
                    </div>
                    
                    <h1 class="hero-title">
                        <span class="brand-name"><?php echo get_theme_mod('hero_brand_name', 'AgentECStar'); ?></span>
                        <br />
                        <span class="hero-subtitle"><?php echo get_theme_mod('hero_subtitle', 'Automação com Inteligência Artificial'); ?></span>
                    </h1>
                    
                    <p class="hero-description">
                        <?php echo get_theme_mod('hero_description', 'Transforme o atendimento da sua empresa com automações inteligentes no WhatsApp e Instagram usando IA de última geração.'); ?>
                    </p>

                    <div class="hero-buttons">
                        <a href="<?php echo get_theme_mod('whatsapp_link', 'https://wa.me/5519992288312?text=Olá! Gostaria de agendar uma consulta gratuita sobre automação com IA.'); ?>" 
                           class="btn btn-primary" target="_blank" rel="noopener">
                            <svg class="icon" style="width: 1.25rem; height: 1.25rem; margin-right: 0.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                            <?php echo get_theme_mod('hero_cta_text', 'Agende uma consulta gratuita'); ?>
                        </a>
                        <a href="#services" class="btn btn-outline">
                            <?php echo get_theme_mod('hero_secondary_cta', 'Saiba mais'); ?>
                        </a>
                    </div>

                    <div class="hero-features">
                        <div class="hero-feature">
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <span>IA Avançada</span>
                        </div>
                        <div class="hero-feature">
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                            <span>WhatsApp & Insta</span>
                        </div>
                        <div class="hero-feature">
                            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <span>24/7</span>
                        </div>
                    </div>
                </div>

                <div class="hero-chat">
                    <!-- Futuristic Chat Interface -->
                    <div class="chat-interface">
                        <!-- Header -->
                        <div class="chat-header">
                            <div class="chat-avatar">
                                <div class="avatar">
                                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div class="chat-info">
                                    <h4>AgentECStar IA</h4>
                                    <p>Online agora</p>
                                </div>
                            </div>
                            <div class="status-dot"></div>
                        </div>

                        <!-- Messages -->
                        <div class="chat-messages">
                            <div class="message">
                                <div class="message-avatar bot">
                                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div class="message-content">
                                    <p>Olá! Como posso ajudar você hoje? Estou aqui para otimizar seu atendimento! 🚀</p>
                                </div>
                            </div>
                            
                            <div class="message sent">
                                <div class="message-content">
                                    <p>Gostaria de automatizar meu WhatsApp</p>
                                </div>
                                <div class="message-avatar user"></div>
                            </div>

                            <div class="message">
                                <div class="message-avatar bot">
                                    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div class="message-content">
                                    <p>Perfeito! Posso configurar um sistema de IA personalizado para sua empresa. Quando podemos conversar? 💡</p>
                                </div>
                            </div>
                        </div>

                        <!-- Typing Indicator -->
                        <div class="typing-indicator">
                            <div class="typing-dots">
                                <div class="typing-dot"></div>
                                <div class="typing-dot"></div>
                                <div class="typing-dot"></div>
                            </div>
                            <span>IA digitando...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
            <div class="scroll-mouse">
                <div class="scroll-wheel"></div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php echo get_theme_mod('services_title', 'Nossos Serviços'); ?></h2>
                <p class="section-subtitle"><?php echo get_theme_mod('services_subtitle', 'Soluções completas de automação com IA para transformar seu atendimento'); ?></p>
            </div>
            
            <?php
            // Custom services content would go here
            // This can be managed through WordPress admin or custom fields
            if (have_posts()) :
                while (have_posts()) : the_post();
                    the_content();
                endwhile;
            endif;
            ?>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title"><?php echo get_theme_mod('contact_title', 'Entre em Contato'); ?></h2>
                <p class="section-subtitle"><?php echo get_theme_mod('contact_subtitle', 'Vamos conversar sobre como podemos automatizar seu negócio'); ?></p>
            </div>
            
            <div style="text-align: center; margin-top: 2rem;">
                <a href="<?php echo get_theme_mod('whatsapp_link', 'https://wa.me/5519992288312?text=Olá! Gostaria de saber mais sobre automação com IA.'); ?>" 
                   class="btn btn-primary" target="_blank" rel="noopener">
                    <svg class="icon" style="width: 1.25rem; height: 1.25rem; margin-right: 0.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    Fale Conosco no WhatsApp
                </a>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>