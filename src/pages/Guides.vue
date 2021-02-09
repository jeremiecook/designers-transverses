<template>

    <Layout>
        <div>
            <div class="rf-container">

                <h2>Guides pratiques</h2>
                <div class="rf-grid-row rf-grid-row--gutters">

                    <div class="rf-col-12 rf-col-md-4" v-for="(edge, index) in incomingEvents" :key="edge.node.id" >
                         <g-link class="rf-card" >
                            <div class="rf-card__img" :style="{ 'background-image': 'url(' + edge.node.illustration[0].url + ')'}">
                            </div>
                            <div class="rf-card__body">
                                <h4 class="rf-card__title">{{ edge.node.titre }}</h4>
                                <p class="rf-card__desc">{{ edge.node.description }}</p>
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
    events: allGuide {
        edges {
            node {
                titre
                description
                lien
                illustration {
                    url
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

