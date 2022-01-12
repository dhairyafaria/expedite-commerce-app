<template>
    <div class="box">
        <div class="box__title-space">
            <div class="box__title">CONNECTION</div>
        </div>
        <form class="box__form" @submit.prevent="">
            <div class="box__form-row">
                <div class="half-width">
                    <label class="box__label">Competitor</label>
                    <select class="box__select" v-model="selectedCompetitor">
                        <option value="" disabled selected>Choose competitor..</option>
                        <option v-for="(competitor, i) in competitors"
                            :key="i" :value="competitor.id">
                            {{competitor.name}}
                        </option>
                    </select>
                </div>
                <div class="half-width">
                    <label class="box__label">Opportunity</label>
                    <select class="box__select" v-model="selectedOpportunity">
                        <option value="" disabled selected>Choose opportunity..</option>
                        <option v-for="(opportunity, i) in opportunities"
                            :key="i" :value="opportunity.id"
                        >
                            {{opportunity.name}}
                        </option>
                    </select>
                </div>
                <div class="half-width">
                    <label class="box__label">Challenge</label>
                    <input class="box__input" type="text" v-model="challenge"
                        placeholder="Challenge description.."
                    />
                </div>
                <div class="half-width">
                    <label class="box__label">Strategy</label>
                    <input class="box__input" type="text" v-model="strategy"
                        placeholder="Strategy description.."
                    />
                </div>
                <div class="display-left">
                    <button class="box__button" @click="addConnection">CONNECT</button>
                </div>
            </div>
        </form>
        <div class="box__connections" v-for="(connection, i) in connections" :key="i">
            <div class="box__connections-container">
                <div class="box__connection">
                    <div class="box__connection-row">
                        <span class="box__connection-label">
                            {{getCompetitorLabel(connection.competitorsId)}}
                        </span>
                        <span class="box__connection-arrow">-></span>
                        <span class="box__connection-label">
                            {{getOpportunityLabel(connection.opportunityId)}}
                        </span>
                    </div>
                    <div class="box__connection-description">
                        {{connection.challenge}}
                    </div>
                    <div class="box__connection-description">
                        {{connection.strategy}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { DataStore } from '@aws-amplify/datastore';
import { ConnectionDescription } from '../models';

export default {
  name: 'Connection',
  props: {
    competitors: {
      type: Array,
      default: (() => []),
    },
    opportunities: {
      type: Array,
      default: (() => []),
    },
  },
  data: (() => ({
    selectedCompetitor: '',
    selectedOpportunity: '',
    challenge: '',
    strategy: '',
    connections: [],
  })),
  created() {
    this.getConnection();
  },
  methods: {
    async addConnection() {
      try {
        if (this.selectedCompetitor && this.selectedOpportunity) {
          const response = await DataStore.save(
            new ConnectionDescription({
              challenge: this.challenge,
              strategy: this.strategy,
              competitorsId: this.selectedCompetitor,
              opportunityId: this.selectedOpportunity,
            }),
          );
          this.connections.push(response);
          this.challenge = '';
          this.strategy = '';
          this.selectedCompetitor = '';
          this.selectedOpportunity = '';
        }
      } catch (error) {
        console.error(error);
      }
    },
    async getConnection() {
      try {
        this.connections = await DataStore.query(ConnectionDescription);
      } catch (error) {
        console.error(error);
      }
    },
    getCompetitorLabel(id) {
      return this.competitors.find((o) => o.id === id).name;
    },
    getOpportunityLabel(id) {
      return this.opportunities.find((o) => o.id === id).name;
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
    &__title-space {
      width: 635px;
      height: 40px;
      border-width: 1px;
      border-style: solid;
      border-color: #333333;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      background-color: #575757;
      background-size: cover;

      .box__title {
        width: 203px;
        height: 14px;
        font-family: Montserrat;
        font-size: 11px;
        color: #ffffff;
        text-decoration: none solid rgb(255, 255, 255);
        text-transform: uppercase;
        margin: 12px 0px 14px 19px  ;
      }
    }

    &__form {
      width: 635px;
      height: 223px;
      border: 1px solid #404040;
      background-color: #404040;
      background-size: cover;
      border-bottom-color: #333333;

      &-row {
        margin: 15px 15px 15px 15px;
        .half-width {
            width: 50%;
            display: inline-block;
            margin-bottom: 15px;
        }
        .box__label {
          width: 124px;
          height: 20px;
          font-family: Roboto;
          font-size: 13px;
          color: #ffffff;
          text-decoration: none solid rgb(255, 255, 255);
          line-height: 20px;
          display: inline-block;
        }
        .box__select {
            width: 294px;
            height: 34px;
            padding: 0px 10px;
            border: 1px solid #5f5f5f;
            background-color: #404040;
            font-family: Roboto;
            font-size: 13px;
            color: #ffffff;
            text-decoration: none solid rgb(255, 255, 255);
        }
        .box__input {
            width: 272px;
            height: 34px;
            padding: 0px 10px;
            border: 1px solid #5f5f5f;
            background-color: #404040;
            font-family: Roboto;
            font-size: 13px;
            color: #ffffff;
            text-decoration: none solid rgb(255, 255, 255);
        }
        .display-left{
            display: flex;
            justify-content: flex-end;
        }
        .box__button {
          width: 132px;
          height: 34px;
          padding: 0px 20px;
          border-radius: 3px;
          background-color: #57c046;
          font-family: Montserrat;
          font-size: 11px;
          color: #ffffff;
          text-decoration: none solid rgb(255, 255, 255);
          text-align: center;
        }
      }
    }
    &__connections {
      width: 635px;
      border: 1px solid #404040;
      border-bottom-right-radius: 3px;
      border-bottom-left-radius: 3px;
      background-color: #404040;
      background-size: cover;
      border-top-color: #333333;

      .box__connections-container {
        margin: 15px 0px 15px 10px;

        .box__connection-row {
            margin: 0px 0px 15px 15px;
        }
        .box__connection-label {
            width: 36px;
            height: 20px;
            font-family: Roboto;
            font-size: 14px;
            color: #ffffff;
            text-decoration: none solid rgb(255, 255, 255);
            line-height: 20px;
        }
        .box__connection-arrow {
            width: 16px;
            height: 16px;
            color: #ffffff;
            margin: 0px 18px;
        }
        .box__connection-description {
            width: 265px;
            height: 39px;
            border-top-width: 1px;
            border-style: solid;
            border-color: #404040;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            background-color: #333333;
            background-size: cover;
            margin-right: 5px;
            display: inline-block;
            font-family: Roboto;
            font-size: 12px;
            color: #acacac;
            text-decoration: none solid rgb(172, 172, 172);
            line-height: 39px;
            padding: 0px 15px;
        }
      }
    }
}
</style>
