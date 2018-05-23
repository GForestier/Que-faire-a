export class Bar {
    static count = 0;
    public id = 0;
    public nom: string;
    public adresse: string;
    public horaires: string;

    constructor(nom = '', adresse = '', horaires = '') {
        this.id = Bar.count++;
        this.nom = nom;
        this.adresse = adresse;
        this.horaires = horaires;
    }
}
