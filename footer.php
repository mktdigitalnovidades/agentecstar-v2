    <footer class="footer" style="background: linear-gradient(135deg, #1a1847, #2d2875); padding: 3rem 0; color: white; text-align: center;">
        <div class="container">
            <div style="margin-bottom: 2rem;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem; color: #5eb9c2;">
                    <?php echo get_theme_mod('hero_brand_name', 'AgentECStar'); ?>
                </h3>
                <p style="color: #d1d5db; max-width: 600px; margin: 0 auto;">
                    Transformando negócios com automação inteligente e IA de última geração.
                </p>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <a href="<?php echo get_theme_mod('whatsapp_link', 'https://wa.me/5519992288312'); ?>" 
                   class="btn btn-primary" target="_blank" rel="noopener">
                    <svg style="width: 1.25rem; height: 1.25rem; margin-right: 0.5rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    Entre em Contato
                </a>
            </div>
            
            <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 2rem;">
                <p style="color: #9ca3af; font-size: 0.875rem; margin: 0;">
                    &copy; <?php echo date('Y'); ?> <?php echo get_theme_mod('hero_brand_name', 'AgentECStar'); ?>. Todos os direitos reservados.
                </p>
                
                <?php if (get_bloginfo('description')) : ?>
                    <p style="color: #9ca3af; font-size: 0.875rem; margin: 0.5rem 0 0 0;">
                        <?php bloginfo('description'); ?>
                    </p>
                <?php endif; ?>
            </div>
        </div>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>