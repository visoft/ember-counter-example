import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      dog: this.store.findAll('dog'),
      cat: this.store.findAll('cat')
    }).then((models) => {
      let results = []
      // sometimes the dog comes down as an mp4, exclude those results
      let dog =  models.dog.firstObject.url;
      if (!dog.match(/\.mp4$/)) {
        results.push({ url: dog});
      }
      results.push({ url: models.cat.firstObject.file });
      return results;
    })
  }
});
