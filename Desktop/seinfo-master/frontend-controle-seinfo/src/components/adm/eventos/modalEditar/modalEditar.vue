<template>
  <!-- MODAL VER EDITAR (INICIO) -->
  <div
    class="modal fade bd-example-modal-lg-editar"
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="form">
            <div class="row justify-content-center">
              <div class="row justify-content-center">
                <a-form-item class="space_2">
                  <label class="ant-form-item-required">Nome do Evento:</label>
                  <a-input
                    maxlength="255"
                    placeholder="Nome"
                    v-model="data.nome"
                    autocomplete="off"
                    type="text"
                  >
                    <a-icon
                      slot="prefix"
                      type="user"
                      style="color: rgba(0, 0, 0, 0.25)"
                    />
                  </a-input>
                </a-form-item>
              </div>

              <a-form-item class="space_2">
                <label class="ant-form-item-required"
                  >Selecione um Organizador:</label
                >

                <a-select
                  v-model="data.organizacaoEvento.CPF"
                >
                  <a-select-option
                    id="cpfOrganizador"
                    name="cpfOrganizador"
                    v-for="pessoa in pessoas"
                    :key="pessoa.CPF"
                    :value="pessoa.CPF"
                    >{{ pessoa.nome }}</a-select-option
                  >
                </a-select>
              </a-form-item>

              <div class="row justify-content-center">
                <a-form-item
                  class="space"
                  :validate-status="onChangeDate() === 1 ? 'error' : ''"
                  :help="
                    onChangeDate() === 1
                      ? 'Data de Fim deve ser maior que a Data de Inicio'
                      : ''
                  "
                >
                  <label class="ant-form-item-required"
                    >Data de Inicio do Evento:</label
                  >
                  <a-input v-model="data.data_ini_eve" name="data_ini_eve" type="date">
                    <a-icon
                      slot="prefix"
                      type="calendar"
                      style="color: rgba(0, 0, 0, 0.25)"
                    />
                  </a-input>
                </a-form-item>
                <a-form-item
                  class="space"
                  :validate-status="onChangeHour() === 2 ? 'error' : ''"
                  :help="
                    onChangeHour() === 2
                      ? 'Hora de Fim deve ser maior que a Hora de Inicio'
                      : ''
                  "
                >
                  <label class="ant-form-item-required"
                    >Hora de Inicio do Evento:</label
                  >
                  <a-input v-model="data.hora_ini_eve" name="hora_ini_eve" type="time">
                    <a-icon
                      slot="prefix"
                      type="clock-circle"
                      style="color: rgba(0, 0, 0, 0.25)"
                    />
                  </a-input>
                </a-form-item>
              </div>
              <div class="row justify-content-center">
                <a-form-item
                  class="space"
                  :validate-status="onChangeDate() === 1 ? 'error' : ''"
                  :help="
                    onChangeDate() === 1
                      ? 'Data de Fim deve ser maior que a Data de Inicio'
                      : ''
                  "
                >
                  <label class="ant-form-item-required"
                    >Data de Fim do Evento:</label
                  >
                  <a-input v-model="data.data_fim_eve" name="data_fim_eve" type="date">
                    <a-icon
                      slot="prefix"
                      type="calendar"
                      style="color: rgba(0, 0, 0, 0.25)"
                    />
                  </a-input>
                </a-form-item>
                <a-form-item
                  class="space"
                  :validate-status="onChangeHour() === 2 ? 'error' : ''"
                  :help="
                    onChangeHour() === 2
                      ? 'Hora de Fim deve ser maior que a Hora de Inicio'
                      : ''
                  "
                >
                  <label class="ant-form-item-required"
                    >Hora de Fim do Evento:</label
                  >
                  <a-input v-model="data.hora_fim_eve" name="hora_fim_eve" type="time">
                    <a-icon
                      slot="prefix"
                      type="clock-circle"
                      style="color: rgba(0, 0, 0, 0.25)"
                    />
                  </a-input>
                </a-form-item>
              </div>
              <div class="row justify-content-center">
                <a-form-item class="space">
                  <label class="ant-form-item-required">Local do Evento:</label>
                  <a-input
                    maxlength="255"
                    autocomplete="off"
                    placeholder="Local"
                    v-model="data.agendamento.local"
                    type="text"
                  >
                    <a-icon
                      slot="prefix"
                      type="home"
                      style="color: rgba(0, 0, 0, 0.25)"
                    />
                  </a-input>
                </a-form-item>
                <a-form-item class="space">
                  <label class="ant-form-item-required"
                    >Status do Evento:</label
                  >
                  <a-select
                    v-model="data.status"
                    name="select_status"
                    defaultValue="0"
                  >
                    <a-select-option :value="1"
                      >Evento disponivel</a-select-option
                    >
                    <a-select-option :value="0"
                      >Evento indisponivel</a-select-option
                    >
                  </a-select>
                </a-form-item>
              </div>
              <div class="row justify-content-center"></div>

              <div class="row justify-content-center">
                <a-form-item class="space_2">
                  <label class="ant-form-item-required">Descrição:</label>
                  <a-textarea
                    autocomplete="off"
                    maxlength="5000"
                    type="text"
                    v-model="data.descricao"
                    placeholder="Descrição"
                    :rows="4"
                    >{{ data.descricao }}</a-textarea
                  >
                </a-form-item>
              </div>
            </div>
            <br />
            <div class="row justify-content-center">
              <button
                type="button"
                v-on:click="patch(data)"
                class="btn btn-outline-primary btn-sm"
              >
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- MODAL VER EDITAR (FIM) -->
</template>

<script src="./modalEditar.js" />

<style src="./modalEditar.css" />