import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Mock translations for testing
const mockTranslations = {
  en: {
    common: {
      language: {
        language: 'Language',
        selectLanguage: 'Select language',
        changeLanguage: 'Change language',
        currentLanguage: 'Current language',
        availableLanguages: 'Available languages',
        languageChanged: 'Language changed to {{language}}',
        languageNotSupported: 'Language not supported'
      },
      actions: {
        view: 'View',
        edit: 'Edit',
        delete: 'Delete',
        save: 'Save',
        cancel: 'Cancel',
        close: 'Close',
        submit: 'Submit',
        reset: 'Reset',
        back: 'Back',
        next: 'Next',
        previous: 'Previous',
        continue: 'Continue',
        finish: 'Finish',
        search: 'Search',
        filter: 'Filter',
        sort: 'Sort',
        refresh: 'Refresh',
        loading: 'Loading...',
        error: 'Error',
        success: 'Success',
        warning: 'Warning',
        info: 'Information'
      }
    },
    components: {
      Person: {
        actions: {
          viewProfile: 'View Profile',
          emailPerson: 'Email {{name}}',
          callPerson: 'Call {{name}}{{#if label}} ({{label}}){{/if}}',
          contactPerson: 'Contact {{name}}'
        },
        meta: {
          speaks: 'Speaks: {{languages}}',
          pronouns: 'Pronouns: {{pronouns}}',
          department: 'Department: {{department}}'
        },
        accessibility: {
          emailAriaLabel: 'Email {{name}}',
          phoneAriaLabel: 'Call {{name}}{{#if label}} ({{label}}){{/if}}',
          profileLinkAriaLabel: 'View profile for {{name}}',
          avatarAltText: 'Portrait of {{name}}',
          avatarDecorative: 'Decorative avatar image'
        }
      },
      Button: {
        variants: {
          default: 'Default button',
          secondary: 'Secondary button',
          accentCool: 'Cool accent button',
          accentWarm: 'Warm accent button',
          base: 'Base button',
          outline: 'Outline button',
          outlineInverse: 'Inverse outline button',
          big: 'Big button'
        }
      },
      Header: {
        navigation: {
          primary: 'Primary navigation',
          search: 'Search component'
        },
        mobile: {
          menu: 'Menu',
          close: 'Close'
        },
        accessibility: {
          logo: 'Logo',
          title: 'Title',
          subtitle: 'Subtitle'
        },
        defaults: {
          menu: 'Menu',
          close: 'Close'
        }
      },
      Modal: {
        accessibility: {
          closeButton: 'Close this modal',
          modalDialog: 'Modal dialog'
        },
        defaults: {
          closeButton: 'Close'
        }
      },
      Search: {
        labels: {
          search: 'Search',
          searchComponent: 'search component'
        },
        accessibility: {
          searchLabel: 'Search',
          searchComponent: 'search component'
        },
        defaults: {
          search: 'Search',
          searchComponent: 'search component'
        }
      },
      Footer: {
        feedback: {
          improveText: 'See something we could improve on this page?',
          feedbackLink: 'Give website feedback'
        },
        accessibility: {
          requestServices: 'Request these services',
          online: 'online',
          or: 'or',
          relayService: 'Relay Service:'
        },
        translation: {
          translationText: 'for translation assistance'
        },
        exploreServices: {
          exploreServicesText: 'Explore services'
        },
        sections: {
          generalInformation: 'General Information',
          termsAndPolicies: 'Terms And Policies',
          portlandGov: 'Portland.Gov'
        },
        defaults: {
          feedback: 'Give website feedback',
          requestServices: 'Request these services',
          online: 'online',
          relayService: 'Relay Service:',
          translation: 'for translation assistance',
          exploreServices: 'Explore services',
          generalInformation: 'General Information',
          termsAndPolicies: 'Terms And Policies',
          portlandGov: 'Portland.Gov'
        }
      },
      Alert: {
        types: {
          info: 'Information',
          success: 'Success',
          warning: 'Warning',
          error: 'Error'
        }
      }
    }
  },
  es: {
    common: {
      language: {
        language: 'Idioma',
        selectLanguage: 'Seleccionar idioma',
        changeLanguage: 'Cambiar idioma',
        currentLanguage: 'Idioma actual',
        availableLanguages: 'Idiomas disponibles',
        languageChanged: 'Idioma cambiado a {{language}}',
        languageNotSupported: 'Idioma no soportado'
      },
      actions: {
        view: 'Ver',
        edit: 'Editar',
        delete: 'Eliminar',
        save: 'Guardar',
        cancel: 'Cancelar',
        close: 'Cerrar',
        submit: 'Enviar',
        reset: 'Restablecer',
        back: 'Atrás',
        next: 'Siguiente',
        previous: 'Anterior',
        continue: 'Continuar',
        finish: 'Finalizar',
        search: 'Buscar',
        filter: 'Filtrar',
        sort: 'Ordenar',
        refresh: 'Actualizar',
        loading: 'Cargando...',
        error: 'Error',
        success: 'Éxito',
        warning: 'Advertencia',
        info: 'Información'
      }
    },
    components: {
      Person: {
        actions: {
          viewProfile: 'Ver Perfil',
          emailPerson: 'Enviar correo a {{name}}',
          callPerson: 'Llamar a {{name}}{{#if label}} ({{label}}){{/if}}',
          contactPerson: 'Contactar a {{name}}'
        },
        meta: {
          speaks: 'Habla: {{languages}}',
          pronouns: 'Pronombres: {{pronouns}}',
          department: 'Departamento: {{department}}'
        },
        accessibility: {
          emailAriaLabel: 'Enviar correo a {{name}}',
          phoneAriaLabel: 'Llamar a {{name}}{{#if label}} ({{label}}){{/if}}',
          profileLinkAriaLabel: 'Ver perfil de {{name}}',
          avatarAltText: 'Retrato de {{name}}',
          avatarDecorative: 'Imagen decorativa del avatar'
        }
      },
      Header: {
        navigation: {
          primary: 'Navegación principal',
          search: 'Componente de búsqueda'
        },
        mobile: {
          menu: 'Menú',
          close: 'Cerrar'
        },
        accessibility: {
          logo: 'Logo',
          title: 'Título',
          subtitle: 'Subtítulo'
        },
        defaults: {
          menu: 'Menú',
          close: 'Cerrar'
        }
      },
      Modal: {
        accessibility: {
          closeButton: 'Cerrar este modal',
          modalDialog: 'Diálogo modal'
        },
        defaults: {
          closeButton: 'Cerrar'
        }
      },
      Search: {
        labels: {
          search: 'Buscar',
          searchComponent: 'componente de búsqueda'
        },
        accessibility: {
          searchLabel: 'Buscar',
          searchComponent: 'componente de búsqueda'
        },
        defaults: {
          search: 'Buscar',
          searchComponent: 'componente de búsqueda'
        }
      },
      Footer: {
        feedback: {
          improveText: '¿Ves algo que podríamos mejorar en esta página?',
          feedbackLink: 'Dar retroalimentación del sitio web'
        },
        accessibility: {
          requestServices: 'Solicitar estos servicios',
          online: 'en línea',
          or: 'o',
          relayService: 'Servicio de relevo:'
        },
        translation: {
          translationText: 'para asistencia de traducción'
        },
        exploreServices: {
          exploreServicesText: 'Explorar servicios'
        },
        sections: {
          generalInformation: 'Información General',
          termsAndPolicies: 'Términos y Políticas',
          portlandGov: 'Portland.Gov'
        },
        defaults: {
          feedback: 'Dar retroalimentación del sitio web',
          requestServices: 'Solicitar estos servicios',
          online: 'en línea',
          relayService: 'Servicio de relevo:',
          translation: 'para asistencia de traducción',
          exploreServices: 'Explorar servicios',
          generalInformation: 'Información General',
          termsAndPolicies: 'Términos y Políticas',
          portlandGov: 'Portland.Gov'
        }
      }
    }
  }
};

// Initialize i18n for testing
i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en', 'es'],
    ns: ['common', 'components'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Add mock translations to i18n
Object.entries(mockTranslations).forEach(([language, namespaces]) => {
  Object.entries(namespaces).forEach(([namespace, translations]) => {
    if (namespace === 'components') {
      // For components, we need to add each component as a separate namespace
      Object.entries(translations).forEach(([componentName, componentTranslations]) => {
        i18n.addResourceBundle(language, `components.${componentName}`, componentTranslations, true, true);
      });
    } else {
      i18n.addResourceBundle(language, namespace, translations, true, true);
    }
  });
});

// Ensure translations are loaded
i18n.loadNamespaces(['common', 'components']);

// Helper function to render components with i18n provider
export const renderWithI18n = (component, options = {}) => {
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>,
    options
  );
};

// Helper function to change language in tests
export const changeLanguageInTest = async (languageCode) => {
  await i18n.changeLanguage(languageCode);
};

// Helper function to reset language to default
export const resetLanguageInTest = async () => {
  await i18n.changeLanguage('en');
};

// Export i18n instance for direct use in tests
export { i18n };
