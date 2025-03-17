let eventBus = new Vue()



Vue.component('kanban-board',{
    props:{
      
    },
    template:`
        <div class="kanban-board">
            <task-column>
    
            </task-column>
        </div>
    `,
    data(){
        
    },
    methods: {
        

    },

    computed: {

    },
});


Vue.component('task-column', {
   
    template:`
        <div class="column">
            <button @click="addTask">Добавить задачу</button>
        </div>
    `,


    methods: {
        addTask(){
            this.$emit('add-task');
        },


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
});

Vue.component('task-form', {
    props:{
        task:{
            type: Object,
            default:() => ({
                id: null,
                title: '',
                description: '',
                deadline: '',
                createdAt: '',
                lastEditedAt: '',
            }),
        },
    },


    template:`
        <form @submit.prevent="submitForm">
            <input v-model="formData.title" placeholder="Заголовок" required>
            <texterea v-model="formData.description" placeholder="Описание" required></texterea>
            <input v-model="formData.deadline" type="date" required>
            <button type="submit">Сохранить</button>
        </form>
    `,

    data(){
        return{
            formData:{
                id: this.task.id,
                title:this.task.title,
                description: this.task.description,
                deadline: this.task.deadline,
                createdAt: this.task.created.At,
                lastEditedAt: this.task.lastEditedAt

            }
        }
    },

    methods:{
        submitForm() {
            if(!this.formData.id){
                this.formData.id = Data.now();
                this.formData.id = new Date().toLocaleString();
            }
            this.$emit('submit-task', {
                                          id: this.formData.id,
                                          title:this.formData.title,
                                          description: this.formData.description,
                                          deadline: this.formData.deadline,
                                          createdAt: this.formData.created.At,
                                          lastEditedAt: this.formData.lastEditedAt

                                        }
            );
        },
    }
})


Vue.component('modal-window',{

    props:{
        show: {
            type: Boolean,
            required: true,
        }

    },
    template:`
        <div class="modal-overlay" v-if="show">
            <div class="modal-window">
                <h2>Добавить задачу</h2>
                <button class="close-modal" @click="$emit('close-modal')">x</button>
            </div>
        
        </div>
    `

})




let app = new Vue({
    el: '#app',
    data: {
        showModal: false,
        editingTask: null,
        columns: [
            { id: 1, title: "Запланированные задачи", tasks: [] },
            { id: 2, title: "Задачи в работе", tasks: [] },
            { id: 3, title: "Тестирование", tasks: [] },
            { id: 4, title: "Выполненные задачи", tasks: [] },
            
        ]
                                                                                              
    },
    
    methods: {
        openModal(task = null){
            this.showModal = true;
            this.editingTask = task;
        },
        closeModal(){
            this.showModal = false;
            this.editingTask = null;
        }
        
    },
    computed:{
        
    },

    
});