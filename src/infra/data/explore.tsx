export class ExploreCategory {
  categoryName: string;
  categoryImage: string;
  categoryDescription: string;
  categoryID: string;
  categoryCountry: string;

  constructor(
    categoryName: string,
    categoryImage: string,
    categoryDescription: string,
    categoryID: string,
    categoryCountry: string
  ) {
    this.categoryName = categoryName;
    this.categoryImage = categoryImage;
    this.categoryDescription = categoryDescription;
    this.categoryID = categoryID;
    this.categoryCountry = categoryCountry;
  }
}
