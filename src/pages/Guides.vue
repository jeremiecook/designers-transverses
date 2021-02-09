<template>

    <Layout>
        <div>
            <div class="rf-container">

                <h2>Guides pratiques</h2>
                <div class="rf-grid-row rf-grid-row--gutters">

                    <div class="rf-col-12 rf-col-md-4">
                        <g-link class="rf-card" >
                            <div class="rf-card__img" :style="{ 'background-image': 'url(./images/interview.svg)'}">
                            </div>
                            <div class="rf-card__body">
                                <h4 class="rf-card__title">Les entretiens et tests utilisateurs</h4>
                                <p class="rf-card__desc">Comment et pourquoi concevoir un site ou une application accessible ? </p>
                            </div>
                         </g-link>
                    </div>

                    <div class="rf-col-12 rf-col-md-4">
                        <g-link class="rf-card" >
                            <div class="rf-card__img" :style="{ 'background-image': 'url(./images/accessibility.svg)'}">
                            </div>
                            <div class="rf-card__body">
                                <h4 class="rf-card__title">L'accessibilité pour ma Start-up</h4>
                                <p class="rf-card__desc">Comment et pourquoi concevoir un site ou une application accessible ? </p>
                            </div>
                         </g-link>
                    </div>

                    <div class="rf-col-12 rf-col-md-4">
                        <g-link class="rf-card" >
                            <div class="rf-card__img" :style="{ 'background-image': 'url(./images/designers.svg)'}">
                            </div>
                            <div class="rf-card__body">
                                <h4 class="rf-card__title">Recruter un designer</h4>
                                <p class="rf-card__desc">Comment peut-il m'aider, quel profil choisir, comment trouver la bonne personne ?</p>
                            </div>
                         </g-link>
                    </div>

                    <div class="rf-col-4">
                        <g-link class="rf-card" >
                            <div class="rf-card__img" :style="{ 'background-image': 'url(./images/design-system.svg)'}">
                            </div>
                            <div class="rf-card__body">
                                <h4 class="rf-card__title">Le Design System de l'Etat</h4>
                                <p class="rf-card__desc">Toutes les ressources pour mettre en place le Design System sur votre produit</p>
                            </div>
                         </g-link>
                    </div>


                </div>



            </div>
        </div>
  </Layout>
</template>

<page-query>
  query Events {
    events: allEvent {
      edges {
        node {
          id
          sujet
          pour
          debut
          compteRendu
          type {
            name
            illustration {
              url
            }
          }
        }
      }
    }
  }
</page-query>


<script>
import Layout from "~/layouts/Default.vue";
import EventCard from "~/components/EventCard.vue";
import moment from 'moment'

const now = moment()

export default {
    components: {
        Layout,
        EventCard,
    },

    computed: {
        incomingEvents: function () {
            return this.$page.events.edges
                .filter(event => moment(event.node.debut) >= moment())
                .sort(function (a,b) { return  moment(a.node.debut) > moment(b.node.debut)} );

        },
        pastEvents: function () {
           return this.$page.events.edges
                .filter(event => moment(event.node.debut) <= moment())
                .sort(function (a,b) { return  moment(a.node.debut) < moment(b.node.debut)} );
        }
    },

    filters: {
        formatDate: function(value) {
            moment.locale('fr')
            return moment(value).format("LL");
        },
    }
};
</script>


<style>
    .rf-card {
        border-radius: 5px;
        box-shadow: 0 2px 0 0 #EEE !important;
    }

    a {
        box-shadow: none;
    }

    .rf-card__img {
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom center;

        text-align:center;
    }

    .rf-card__img::before {
        padding-bottom: 70%;
    }

</style>

