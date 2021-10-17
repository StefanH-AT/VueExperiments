<script>
export default {
    props: {
        tabs: Array,
        tabId: {
            required: false,
            type: Number,
            default: 0
        },
        lastAllowedTab: {
            required: false,
            type: Number,
            default: 1000
        }
    },
    data: function(){
        return {
            currentTab: 0
        }
    },
    methods: {
        tabClass: function(index) {
            if(index > this.lastAllowedTab) {
                return "locked";
            } else if(index === this.currentTab) {
                return "current";
            } else if(index > this.currentTab) {
                return "upcoming";
            } else if(index < this.currentTab) {
               return "past";
            }
        },
        tabClick: function(index) {
            if(index > this.lastAllowedTab) return;

            this.currentTab = index;
            this.$emit("tabChanged", index)
        }
    },
    watch: {
        tabId(newVal){
            if(newVal > this.lastAllowedTab) return;

            this.currentTab = newVal;
        }
    }
};
</script>

<template>
    <nav class="progress-nav">
        <ul>
            <li v-for="(tab, i) in tabs"
                :key="tab">
                <button :class="tabClass(i)"
                        @click="tabClick(i)">
                    {{tab}}
                </button>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.progress-nav {
    ul {
        list-style: none;
        display: flex;
        justify-content: stretch;
    }

    li {
        flex-basis: 100%;
    }

    button {
        display: block;
        width: 100%;
        background: var(--scheme-middleground);
        border: none;

        color: var(--scheme-foreground);

        text-align: center;

        font-size: 1.25em;
        font-weight: bold;

        position: relative;

        padding-block: 1rem;

        cursor: pointer;

        &::after {
            --arrow-steepness: 2rem;

            content: "";
            display: inline-block;

            position: absolute;
            left: 100%;
            top: 0;
            bottom: 0;

            height: 100%;
            aspect-ratio: 1 / 1;

            z-index: 3;

            background-color: inherit;

            clip-path: polygon(
            0% 0%,
            calc(100% - var(--arrow-steepness)) 50%,
            0% 100%
            );
        }

        &:focus {
            outline: none;
        }

        &.current {
            background-color: var(--color-accent);
        }

        &.locked {
            background-color: var(--scheme-shade-9);
            color: var(--scheme-shade-7);

            cursor: not-allowed;
        }
    }

    li:last-child > button::after {
        display: none;
    }
}
</style>