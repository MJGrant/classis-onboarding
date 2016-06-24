import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  clientLocation: DS.attr('boolean', { default: true }),
  address: DS.attr('string'),
  city: DS.attr('string')
});
