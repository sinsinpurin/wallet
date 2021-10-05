export interface PresentationDefinition {
  input_descriptors: {
    issuance: {
      manifest: string;
    }[];
  }[];
}

export interface VCRequest {
  prompt?: string;
  redirect_uri?: string;
  presentation_definition: PresentationDefinition;
}

export interface Card {
  title: string;
  issuedBy: string;
  backgroundColor: string;
  textColor: string;
  logo: {
    uri: string;
    description: string;
  };
  description: string;
}

export interface AcquiredAttestation {
  idTokens: AcquiredIdTokens;
}

export interface AcquiredIdTokens {
  [id: string]: string;
}

export interface RequiredToken {
  id: string;
  configuration: string;
  client_id: string;
  redirect_uri: string;
}

export interface RequiredAttestation {
  idTokens: RequiredToken[];
}

export interface Manifest {
  display: {
    card: Card;
  };
  input: {
    attestations: RequiredAttestation;
    credentialIssuer: string;
  };
}

export interface IdTokenConfiguration {
  authorization_endpoint: string;
  token_endpoint: string;
}
