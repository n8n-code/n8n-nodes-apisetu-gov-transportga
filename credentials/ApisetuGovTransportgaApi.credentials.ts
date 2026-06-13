import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovTransportgaApi implements ICredentialType {
        name = 'N8nDevApisetuGovTransportgaApi';

        displayName = 'Apisetu Gov Transportga API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovTransportga/apisetu-gov-transportga.svg', dark: 'file:../nodes/ApisetuGovTransportga/apisetu-gov-transportga.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/transportga/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/transportga/v3',
                        description: 'The base URL of your Apisetu Gov Transportga API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
