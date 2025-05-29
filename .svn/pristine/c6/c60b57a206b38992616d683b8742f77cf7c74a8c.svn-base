import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAttitudini extends Struct.ComponentSchema {
  collectionName: 'components_shared_attitudinis';
  info: {
    description: '';
    displayName: 'Attitudini';
  };
  attributes: {
    Descrizione: Schema.Attribute.RichText;
    SoftSkill: Schema.Attribute.Component<'shared.soft-skill', true>;
  };
}

export interface SharedBenefit extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefits';
  info: {
    displayName: 'Benefit';
  };
  attributes: {
    Descrizione: Schema.Attribute.Text;
    Nome: Schema.Attribute.String;
  };
}

export interface SharedBenefitDesiderati extends Struct.ComponentSchema {
  collectionName: 'components_shared_benefit_desideratis';
  info: {
    displayName: 'BenefitDesiderati';
  };
  attributes: {
    BenefitDesiderati: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPreferenze extends Struct.ComponentSchema {
  collectionName: 'components_shared_preferenzes';
  info: {
    description: '';
    displayName: 'Preferenze';
  };
  attributes: {
    AmbienteLavorativo: Schema.Attribute.Enumeration<
      ['Remoto', 'Ibrido', 'In sede']
    > &
      Schema.Attribute.Required;
    Benefit: Schema.Attribute.Component<'shared.benefit-desiderati', true>;
    TipologiaContratto: Schema.Attribute.Enumeration<
      ['Determinato', 'Indeterminato', 'Apprendistato', 'In stage', 'Part-Time']
    >;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRequisito extends Struct.ComponentSchema {
  collectionName: 'components_shared_requisitos';
  info: {
    displayName: 'Requisito';
  };
  attributes: {
    Competenza: Schema.Attribute.String;
    LivelloCompetenza: Schema.Attribute.Enumeration<
      ['Base', 'Intermedio', 'Esperto']
    >;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSoftSkill extends Struct.ComponentSchema {
  collectionName: 'components_shared_soft_skills';
  info: {
    description: '';
    displayName: 'SoftSkill';
  };
  attributes: {
    SoftSkill: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.attitudini': SharedAttitudini;
      'shared.benefit': SharedBenefit;
      'shared.benefit-desiderati': SharedBenefitDesiderati;
      'shared.media': SharedMedia;
      'shared.preferenze': SharedPreferenze;
      'shared.quote': SharedQuote;
      'shared.requisito': SharedRequisito;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.soft-skill': SharedSoftSkill;
    }
  }
}
