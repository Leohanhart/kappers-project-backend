class Kapper{
    constructor(kapper_id, rooster_id, skills_id, persoon_id){
      this.kapper_id = kapper_id,
      this.rooster_id = rooster_id
      this.rooster = new Rooster,
      this.skills_id = skills_id,
      this.skills = new Skills,
      this.persoon_id = persoon_id,
      this.persoon = new Persoon
    }
}