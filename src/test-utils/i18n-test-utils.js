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
      LanguageSelector: {
        labels: {
          languages: 'Languages',
          selectLanguage: 'Select language',
          footerText: 'Selected content in additional languages'
        },
        accessibility: {
          languageSelector: 'Language selector',
          selectLanguage: 'Select language'
        },
        defaults: {
          languages: 'Languages',
          selectLanguage: 'Select language',
          footerText: 'Selected content in additional languages'
        }
      },
      Breadcrumb: {
        accessibility: {
          breadcrumb: 'Breadcrumb navigation',
          currentPage: 'Current page',
          separator: 'Breadcrumb separator'
        },
        defaults: {
          breadcrumb: 'Breadcrumb navigation',
          currentPage: 'Current page',
          separator: 'Breadcrumb separator'
        }
      },
      Dropdown: {
        validation: {
          required: 'This field is required.',
          select: 'Select'
        },
        accessibility: {
          dropdown: 'Dropdown',
          selectOption: 'Select option'
        },
        defaults: {
          required: 'This field is required.',
          select: '- Select -'
        }
      },
      StepIndicator: {
        accessibility: {
          stepIndicator: 'Step indicator',
          step: 'Step',
          currentStep: 'Current step',
          completedStep: 'Completed step',
          totalSteps: 'of {{total}} steps'
        },
        defaults: {
          step: 'Step',
          currentStep: 'Current step',
          completedStep: 'Completed step',
          totalSteps: 'of {{total}} steps'
        }
      },
      Pagination: {
        navigation: {
          previous: 'Previous',
          next: 'Next',
          page: 'Page',
          of: 'of'
        },
        accessibility: {
          pagination: 'Pagination',
          previousPage: 'Go to previous page',
          nextPage: 'Go to next page',
          firstPage: 'Go to first page',
          lastPage: 'Go to last page',
          currentPage: 'Current page',
          pageNumber: 'Go to page {{page}}'
        },
        defaults: {
          previous: 'Previous',
          next: 'Next',
          first: 'First',
          last: 'Last',
          page: 'Page',
          of: 'of'
        }
      },
      Table: {
        accessibility: {
          table: 'Table',
          sortableColumn: 'Sortable column',
          sortedAscending: 'Sorted ascending',
          sortedDescending: 'Sorted descending'
        },
        defaults: {
          table: 'Table',
          sortableColumn: 'Sortable column',
          sortedAscending: 'Sorted ascending',
          sortedDescending: 'Sorted descending'
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
      },
              Contacts: {
          headings: {
            contact: 'Contact',
            socialMedia: 'Social Media',
            office: 'Office'
          },
          actions: {
            contactThis: 'Contact this {{title}}',
            contactViaEmail: 'Contact {{title}} via email'
          },
          phone: {
            office: 'Phone: Office',
            information: 'Phone: Information',
            relayService: 'Phone: Oregon Relay Service'
          },
          social: {
            facebook: 'Facebook',
            twitter: 'X (Twitter)',
            bluesky: 'Bluesky',
            instagram: 'Instagram'
          },
          office: {
            address: 'Address',
            hours: 'Hours'
          }
        },
        SideNav: {
          accessibility: {
            sectionNavigation: 'Section Navigation'
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
      LanguageSelector: {
        labels: {
          languages: 'Idiomas',
          selectLanguage: 'Seleccionar idioma',
          footerText: 'Contenido seleccionado en idiomas adicionales'
        },
        accessibility: {
          languageSelector: 'Selector de idioma',
          selectLanguage: 'Seleccionar idioma'
        },
        defaults: {
          languages: 'Idiomas',
          selectLanguage: 'Seleccionar idioma',
          footerText: 'Contenido seleccionado en idiomas adicionales'
        }
      },
      Breadcrumb: {
        accessibility: {
          breadcrumb: 'Navegación de migas de pan',
          currentPage: 'Página actual',
          separator: 'Separador de migas de pan'
        },
        defaults: {
          breadcrumb: 'Navegación de migas de pan',
          currentPage: 'Página actual',
          separator: 'Separador de migas de pan'
        }
      },
      Dropdown: {
        validation: {
          required: 'Este campo es obligatorio.',
          select: 'Seleccionar'
        },
        accessibility: {
          dropdown: 'Menú desplegable',
          selectOption: 'Seleccionar opción'
        },
        defaults: {
          required: 'Este campo es obligatorio.',
          select: '- Seleccionar -'
        }
      },
      StepIndicator: {
        accessibility: {
          stepIndicator: 'Indicador de pasos',
          step: 'Paso',
          currentStep: 'Paso actual',
          completedStep: 'Paso completado',
          totalSteps: 'de {{total}} pasos'
        },
        defaults: {
          step: 'Paso',
          currentStep: 'Paso actual',
          completedStep: 'Paso completado',
          totalSteps: 'de {{total}} pasos'
        }
      },
      Pagination: {
        navigation: {
          previous: 'Anterior',
          next: 'Siguiente',
          page: 'Página',
          of: 'de'
        },
        accessibility: {
          pagination: 'Paginación',
          previousPage: 'Ir a la página anterior',
          nextPage: 'Ir a la página siguiente',
          firstPage: 'Ir a la primera página',
          lastPage: 'Ir a la última página',
          currentPage: 'Página actual',
          pageNumber: 'Ir a la página {{page}}'
        },
        defaults: {
          previous: 'Anterior',
          next: 'Siguiente',
          first: 'Primera',
          last: 'Última',
          page: 'Página',
          of: 'de'
        }
      },
      Table: {
        accessibility: {
          table: 'Tabla',
          sortableColumn: 'Columna ordenable',
          sortedAscending: 'Ordenado ascendente',
          sortedDescending: 'Ordenado descendente'
        },
        defaults: {
          table: 'Tabla',
          sortableColumn: 'Columna ordenable',
          sortedAscending: 'Ordenado ascendente',
          sortedDescending: 'Ordenado descendente'
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
        },
                 Contacts: {
           headings: {
             contact: 'Contacto',
             socialMedia: 'Redes Sociales',
             office: 'Oficina'
           },
           actions: {
             contactThis: 'Contactar a este {{title}}',
             contactViaEmail: 'Contactar a {{title}} por correo electrónico'
           },
           phone: {
             office: 'Teléfono: Oficina',
             information: 'Teléfono: Información',
             relayService: 'Teléfono: Servicio de Retransmisión de Oregón'
           },
           social: {
             facebook: 'Facebook',
             twitter: 'X (Twitter)',
             bluesky: 'Bluesky',
             instagram: 'Instagram'
           },
           office: {
             address: 'Dirección',
             hours: 'Horario'
           }
         },
         SideNav: {
           accessibility: {
             sectionNavigation: 'Navegación de Sección'
           }
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
