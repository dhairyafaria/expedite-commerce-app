<template>
   <div class="expedite-commerce-app">
       <box
            name="Competitors"
            title="Competitors"
            label="Competitor name"
            :items="competitors"
            @add-item="addCompetitor"
            @delete-item="deleteCompetitor"
       />
       <box
            name="Opportunities"
            title="BUSINESS OPPORTUNITY"
            label="Opportunity name"
            :items="opportunities"
            @add-item="addOpportunity"
            @delete-item="deleteOpportunity"
        />
        <Connection
            :competitors="competitors"
            :opportunities="opportunities"
        />
   </div>
</template>
<script>
import { DataStore } from '@aws-amplify/datastore';
import { Competitors, Opportunities } from '../models';
import Box from './Box.vue';
import Connection from './Connection.vue';

export default {
  components: { Box, Connection },
  name: 'ExpediteCommerce',
  data: (() => ({
    competitors: [],
    opportunities: [],
  })),
  created() {
    this.getCompetitors();
    this.getOpportunities();
  },
  methods: {
    async getCompetitors() {
      try {
        this.competitors = await DataStore.query(Competitors);
      } catch (error) {
        console.log(error);
      }
    },
    async addCompetitor(competitor) {
      try {
        if (competitor) {
          const res = await DataStore.save(
            new Competitors({
              name: competitor,
            }),
          );
          this.competitors.push(res);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCompetitor(id) {
      try {
        const modelToDelete = await DataStore.query(Competitors, id);
        DataStore.delete(modelToDelete);
        this.competitors.splice(this.competitors.findIndex((a) => a.id === id), 1);
      } catch (error) {
        console.log(error);
      }
    },
    async getOpportunities() {
      try {
        this.opportunities = await DataStore.query(Opportunities);
      } catch (error) {
        console.log(error);
      }
    },
    async addOpportunity(opportunity) {
      try {
        if (opportunity) {
          const res = await DataStore.save(
            new Opportunities({
              name: opportunity,
            }),
          );
          this.opportunities.push(res);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteOpportunity(id) {
      try {
        const modelToDelete = await DataStore.query(Opportunities, id);
        DataStore.delete(modelToDelete);
        this.opportunities.splice(this.opportunities.findIndex((a) => a.id === id), 1);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
    .expedite-commerce-app {
        width: 637px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
