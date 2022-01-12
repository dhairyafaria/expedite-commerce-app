import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type OpportunitiesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CompetitorsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConnectionDescriptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Opportunities {
  readonly id: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Opportunities, OpportunitiesMetaData>);
  static copyOf(source: Opportunities, mutator: (draft: MutableModel<Opportunities, OpportunitiesMetaData>) => MutableModel<Opportunities, OpportunitiesMetaData> | void): Opportunities;
}

export declare class Competitors {
  readonly id: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Competitors, CompetitorsMetaData>);
  static copyOf(source: Competitors, mutator: (draft: MutableModel<Competitors, CompetitorsMetaData>) => MutableModel<Competitors, CompetitorsMetaData> | void): Competitors;
}

export declare class ConnectionDescription {
  readonly id: string;
  readonly challenge?: string;
  readonly strategy?: string;
  readonly competitorsId?: string;
  readonly opportunityId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ConnectionDescription, ConnectionDescriptionMetaData>);
  static copyOf(source: ConnectionDescription, mutator: (draft: MutableModel<ConnectionDescription, ConnectionDescriptionMetaData>) => MutableModel<ConnectionDescription, ConnectionDescriptionMetaData> | void): ConnectionDescription;
}