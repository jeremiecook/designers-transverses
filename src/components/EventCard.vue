<template>

    <g-link class="rf-card" :to="'events/' + event.id">
        <!--<div class="rf-card__img">
            <img src="/img/image.jpg" alt="text alternatif de l’image">
        </div>-->
        <div class="rf-card__body">
            <time class="rf-card__detail">{{ event.debut | formatDateTime }}</time>
            <h4 class="rf-card__title">{{ event.sujet }}</h4>
            <p class="rf-card__desc">{{ event.name }}</p>
            <p class="rf-tag">{{ event.type.name }}</p>
            <!--<p class="rf-card__detail">pour {{ event.type.pour }}</p>-->
        </div>
     </g-link>

</template>

<script>
import moment from "moment";
export default {
    name: "EventCard",
    props: {
        event: Object,
    },
    filters: {
        formatDateTime: function(value) {
            moment.locale('fr', {
                calendar: {
                    sameElse : 'ddd Do MMMM à HH[h]mm'
                }
            });
            return moment(value).calendar();
        }
    },
};
</script>

<style scoped>
    time {
        color: #00AC8C;
        font-weight: 600;
    }

    .rf-card__title {
        font-size: 1.2em;
    }

    a {
        box-shadow: 0 1px 0 0 #00AC8C;
    }
</style>
