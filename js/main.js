let eventBus = new Vue()



Vue.component('kanban-board',{
    template:`
        <div class="kanban-board">
            <task-column
                tasks="plannedTasks">
            
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
                <task-card>

                </task-card>
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
            <div class="card-head">
                <h3 class="card-title"></h3>
                <div>
                    <button>Редактирвать</button>
                    <button>Удалить</button>
                    <button></button>
                </div>
            </div>
            <div class="card-body">

            </div>
        </div>
    `,

    methods: {
        editTask(){

        },

        deleteTask(){

        },
        
    },
})




let app = new Vue({
    el: '#app',
    data: {
        newTask: {},      
    },
    
    methods: {
        
    },
    computed:{
        
    },

    
});