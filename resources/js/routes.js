import Vue from 'vue'
import VueRouter from 'vue-router'
import ExampleComponent from './components/ExampleComponent.vue';
import Topic from './components/Topic.vue';
import Course from './components/Course.vue';
import Capacity from './components/Capacity.vue';
import Content from './components/Content.vue';
import Plan from './components/Plan.vue';
import Curriculum from './components/Curriculum.vue';






Vue.use(VueRouter)

let routes = [
    {
        path: '/ejemplo',
        component: ExampleComponent
    },
    {
        path: '/temas',
        component: Topic
    },
    {
        path: '/cursos',
        component: Course
    },
    {
        path: '/capacidades',
        component: Capacity
    },
    {
        path: '/contenidos',
        component: Content
    },
    {
        path: '/plan',
        component: Plan
    },
    {
        path: '/curriculo',
        component: Curriculum
    },
];


export const router = new VueRouter({
    routes
});
