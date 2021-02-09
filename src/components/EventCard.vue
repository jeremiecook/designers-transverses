<template>

    <g-link class="rf-card" :to="'events/' + event.id">
        <div class="rf-card__img" :style="{ 'background-image': 'url(' + cover + ')'}">
            <p class="rf-tag">{{ event.type.name }}</p>
        </div>
        <div class="rf-card__body">
            <time class="rf-card__detail">{{ event.debut | formatDateTime }}</time>
            <h4 class="rf-card__title">{{ event.sujet }}</h4>
            <p class="rf-card__desc">{{ event.name }}</p>

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
    computed: {
        cover: function () {

            var cover = (this.event.type.illustration[0] !== undefined)
                ? this.event.type.illustration[0].url
                : ""

            return cover;
            //console.log(cover)
            //return "https://dl.airtable.com/.attachments/0102b3cf96f512dfd4d42d4f135ca0fc/5675194e/CoolKids-Brainstorming.png"


        },
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

    .rf-card__img {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;

        text-align:center;
    }

    .rf-tag {
        display: inline-block;
        background: #FFF;
        font-weight: 600;
    }

    .rf-card {
        border-radius: 5px;
        box-shadow: 0 2px 0 0 #EEE;
    }

    .rf-card__title {
        font-size: 1.2em;
    }

    a {
        box-shadow: none;
    }
</style>
