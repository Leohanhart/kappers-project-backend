class Rooster{
    constructor(rooster_id, persoon_id, afspraak_id, vesting_id){
        this.rooster_id = rooster_id,
        this.persoon_id = persoon_id
        this.persoon = new Persoon,
        this.afspraak_id = afspraak_id,
        this.afspraak = new Afspraak,
        this.vesting_id = vesting_id,
        this.vesting = new Vesting
    }
}