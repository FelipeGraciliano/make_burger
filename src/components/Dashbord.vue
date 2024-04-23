<template>
    <div id="burger-table">
        <div>
            <div id="burger-table-heading">
                <div class="order-id">#:</div>
                <div>Cliente:</div>
                <div>Pão:</div>
                <div>Carne:</div>
                <div>Opcionais:</div>
                <div>Acões:</div>
            </div>
        </div>
        <div id="burger-table-rows">
            <div class="burger-table-row">
                <div class="order-number">1</div>
                <div>João</div>
                <div>Pão de trigo</div>
                <div>Alcatra</div>
                <div>
                    <ul>
                        <li>Queijo</li>
                        <li>Salame</li>
                    </ul>
                </div>
                <div>
                    <select name="status" class="status">
                        <option value="">Selecione</option>
                    </select>
                    <button class="delete-btn">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashbord"
}
</script>

<style scoped>
#burger-table {
    max-width: 1200px;
    margin: 0 auto;
}

#burger-table-heading,
#burger-table-rows,
.burger-table-row {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between;
    align-items: center; */
}

#burger-table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
}

#burger-table-heading div,
.burger-table-row div {
    width: 19%;
}

.burger-table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #ccc;
}

#burger-table-heading .order-id,
.burger-table-row .order-number {
    width: 5%;
}

select {
    padding: 12px 6px;
    margin-right: 12px;
}

.delete-btn {
    background-color: #222;
    color: #fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}

.delete-btn:hover {
    background-color: #fcba03;
    color: #222;
    border: 2px solid #fcba03;
}
</style>
