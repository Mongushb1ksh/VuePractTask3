let eventBus = new Vue()



Vue.component('kanban-board',{
    template:`
        <div class="kanban-board">
            <task-column
                tasks="">
            
            </task-column>
            <task-column>
            
            </task-column>
            <task-column>
            
            </task-column>
            <task-column>
            
            </task-column>

            
        </div>
    `,
    data(){
        return{
            plannedTasks: [],
            workingTasks: [],
            testingTasks: [],
            completedTasks: [],
        };
    },
    methods: {

    },

    computed: {

    },
});


Vue.component('task-column', {
    template:`
        <div class="column">
            <div class="cards">

            </div>
        </div>
    `,

    data(){

    },

    methods: {

    },

    computed: {

    }
})


Vue.component('task-card', {
    template:`
        <div class="card">
            <h3 class="card-title"></h3>
        </div>
    `,
})




let app = new Vue({
    el: '#app',
    data: {
        newTask: {},
        cart: [],
            
    },
    
    methods: {
        
    },
    computed:{
        
    },

    
});