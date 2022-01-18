export interface Continent {
  id: string;
  uid: string;
  data: {
    title: string;
    subtitle: string;
    description: string;
    image: {
      url: string;
    };
    languages_number: string;
    most_visited_cities_number: string;
    countries_number: string;
    countries: {
      imageCountrie: {
        url: string;
      }
      countrie_name: string;
      capital_name: string;
      flag_countrie: {
        url: string;
      }
    }[]
  }
}