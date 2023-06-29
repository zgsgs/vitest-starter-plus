declare namespace I18nType {
  interface Schema {
    system: {
      title: string;
    };
    routes: {
      login: {
        login: string;
      }
      dashboard: {
        dashboard: string;
        analysis: string;
        workbench: string;
      };
      about: {
        about: string;
      };
      constantPage:{
        constantPage: string;
      },
      403: {
        403: string;
      },
      404: {
        404: string;
      },
      500: {
        500: string;
      },
    };
    common: {
      copy: string;
      read: string;
    };
    http: Http.ResponseMessage
  }
}
