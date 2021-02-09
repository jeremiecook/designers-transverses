<template>

    <div class="layout">
        <header class="rf-header">
            <div class="rf-container">
                <div class="rf-header__body">
                    <div class="rf-header__brand">
                        <a class="rf-logo" href="#" title="République française">
                            <span class="rf-logo__title">République
                            <br>
                             française</span>
                        </a>
                    </div>
                    <div class="rf-header__navbar">
                        <div class="rf-service">
                            <a class="rf-service__title" href="#" title="Nom du service">
                                {{ $static.metadata.siteName }}
                            </a>
                            <p class="rf-service__tagline">beta.gouv.fr</p>
                        </div>
                    </div>
                </div>

                <nav class="rf-nav" role="navigation" aria-label="Menu principal">
                   <ul class="rf-nav__list">
                      <li class="rf-nav__item">
                         <a class="rf-link" href="/" target="_self">Services</a>
                      </li>
                      <li class="rf-nav__item">
                         <a class="rf-link" href="/events" target="_self">Évènements</a>
                      </li>
                      <li class="rf-nav__item">
                         <a class="rf-link" href="/stats" target="_self">Statistiques</a>
                      </li>
                   </ul>
                </nav>
            </div>
        </header>

    <slot/>

    <footer class="rf-footer" role="contentinfo" id="footer">
        <div class="rf-container">
            <div class="rf-footer__body">
                <div class="rf-footer__brand">
                    <a class="rf-logo" href="#" title="république française">
                        <span class="rf-logo__title">république
                            <br>française</span>
                    </a>
                </div>
                <div class="rf-footer__content">
                    <p class="rf-footer__content-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <a href="https://storyset.com/people">Illustrations de Freepik Storyset</a></p>
                    <ul class="rf-footer__content-list">
                        <li>
                            <a class="rf-footer__content-link" href="https://beta.gouv.fr">beta.gouv.fr</a>
                        </li>
                        <li >
                            <a class="rf-footer__content-link" href="https://doc.incubateur.net/design/">Documentation</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="rf-footer__bottom">
                <ul class="rf-footer__bottom-list">
                    <li class="rf-footer__bottom-item">
                        <a class="rf-footer__bottom-link" href="#">Accessibilité: non/partiellement/totalement conforme</a>
                    </li>
                </ul>
                <div class="rf-footer__bottom-copy">
                    © République Française 2021
                </div>
            </div>
        </div>
    </footer>


  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

body {
    margin: 0;
    background: #FCFCFC;
}

.rf-header {
    box-shadow: none;
    border-bottom: 1px solid #F2F2F2;
}

.rf-footer {
    margin-top: 5em;
    border-top: 1px solid #F2F2F2;
}

h2 {
    font-size: 1.8em;
    text-align: left;
}

</style>
