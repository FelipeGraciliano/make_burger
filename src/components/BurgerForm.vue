<template>
    <div>
        <Message :message="message" v-show="message" />
        <div>
            <form id="burger-form" @submit="createBurger">
                <!-- Nome -->
                <div class="input-container">
                    <label for="name">Nome do cliente:</label>
                    <input type="text" id="name" name="name" v-model="name" placeholder="Digite o seu nome" />
                </div>
                <!-- Pão -->
                <div class="input-container">
                    <label for="bread">Escolha o pão:</label>
                    <select name="bread" id="bread" v-model="bread">
                        <option value="">Escolha o seu pão</option>
                        <option v-for="bread in breads" v-bind:key="bread.id" :value="bread.tipo">
                            {{ bread.tipo }}
                        </option>
                    </select>
                </div>
                <!-- carne -->
                <div class="input-container">
                    <label for="meat">Escolha a carne do seu burger:</label>
                    <select name="meat" id="meat" v-model="meat">
                        <option value="">Selecione o tipo de carne</option>
                        <option v-for="meat in meats" v-bind:key="meat.id" :value="meat.tipo">
                            {{ meat.tipo }}
                        </option>
                    </select>
                </div>
                <div id="optional-container" class="input-container">
                    <label id="optional-title" for="optional">Selecione os opcionais:</label>
                    <div class="checkbox-container" v-for="opcional in optionaldata" :key="opcional.id">
                        <input type="checkbox" id="optional" name="optional" v-model="optional"
                            :value="opcional.tipo" />
                        <span>{{ opcional.tipo }}</span>
                    </div>
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Criar meu Burger!">
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import Message from "./Message.vue";

export default {
    name: "BurgerForm",
    data() {
        return {
            // banco //
            breads: null,
            meats: null,
            optionaldata: null,
            // componente //
            name: null,
            bread: null,
            meat: null,
            optional: [],
            // mensagem //
            status: [],
            message: null
        }
    },
    methods: {
        async getIngredientes() {
            const response = await fetch("http://localhost:3000/ingredientes");
            const ingredientes = await response.json();

            this.breads = ingredientes.paes;
            this.meats = ingredientes.carnes;
            this.optionaldata = ingredientes.opcionais;
        },
        // create burge //
        async createBurger(e) {

            e.preventDefault();

            const data = {
                nome: this.name,
                pao: this.bread,
                carne: this.meat,
                opcionais: Array.from(this.optional),
                status: "Solicitado"
            }

            // transforma obj em string
            const dataJson = JSON.stringify(data);

            // pegar dados via post e id inteiro
            const req = await fetch("http://localhost:3000/burgers", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: dataJson
            });

            const response = await req.json();

            // colocar uma msg de sistema
            this.message = `Pedido Nº ${response.id} realizado com sucesso`

            // limpar msg
            setTimeout(() => {
                this.message = null;
            }, 3000);


            // limpar os campos
            this.name = null;
            this.bread = null;
            this.meat = null;
            this.optional = [];


            console.log(response);
        }
    },
    mounted() {
        this.getIngredientes();
    },
    components: {
        Message
    }
};
</script>

<style scoped>
#burger-form {
    margin: 0 auto;
    max-width: 400px;
}

.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

.input-container label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #fcba03;
}

input,
select {
    padding: 5px 10px;
    width: 300px;
}

#optional-container {
    flex-direction: row;
    flex-wrap: wrap;
}

#optional-title {
    width: 100%;
}

.checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
}

.checkbox-container input,
.checkbox-container span {
    width: auto;
}

.checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
}

.submit-btn {
    background-color: #222;
    color: #fcba03;
    font-style: 16px;
    font-weight: bold;
    padding: 10px;
    border: 2px solid #222;
    border-radius: 5px;
    /* margin: 0 auto; */
    cursor: pointer;
    transition: all .5s;
}

.submit-btn:hover {
    background-color: #fcba03;
    color: #222;
    transform: scale(1.1);
    letter-spacing: 3px;
}
</style>