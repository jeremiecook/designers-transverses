<template>

    <Layout>
        <div>
            <div class="rf-container">

                <h2>Évènements à venir</h2>
                <div class="rf-grid-row rf-grid-row--gutters">
                    <div class="rf-col-3" v-for="(edge, index) in incomingEvents" :key="edge.node.id" >
                        <EventCard :event="edge.node" />
                    </div>
                </div>

                <h2>Évènements passés</h2>
                <div class="events">
                    <div class="event" v-for="(edge, index) in pastEvents" :key="edge.node.id">
                        <div><p class="rf-tag">{{ edge.node.type.name }}</p></div>
                        <time>{{ edge.node.debut | formatDate }}</time>
                        <div>
                            <h4>{{ edge.node.sujet }}</h4>
                            <a v-if="edge.node.compteRendu != ''" :href="edge.node.compteRendu" class="rf-link">Voir le compte rendu</a>
                        </div>
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
    .events {
        display: table;
        border-collapse: separate;
        border-spacing: 1em;
    }

    .event {
        display: table-row;
    }

    .event > div {
        display: table-cell;
    }

    h4 {
        display: inline-block;
        margin: 0;
        margin-right: 1em;
    }


</style>

