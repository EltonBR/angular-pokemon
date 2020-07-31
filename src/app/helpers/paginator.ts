export class Paginator {
    private totalPages: number;
    private lastPageCountItens: number;
    private atualPage: number = 0;
    private pageSumIndex = 0;

    constructor(private data:any, private itensPerPage:number = 12) {
      this.totalPages = parseInt((data.length/itensPerPage).toString());
      this.lastPageCountItens = data.length%itensPerPage;
      if (this.lastPageCountItens > 0) {
        this.pageSumIndex = +1;
      }
    }

    getPageData() {
        if (this.atualPage > this.totalPages) {
          return this.data.slice(this.data.length - this.lastPageCountItens, this.data.length);
        } else {
          console.log(this.atualPage*this.itensPerPage, (this.atualPage*this.itensPerPage)+this.itensPerPage);
          return this.data.slice(this.atualPage*this.itensPerPage, (this.atualPage*this.itensPerPage)+this.itensPerPage);
        }
    }
    setPage(page: number) {
      this.atualPage = page;
    }

    nextPage() {
      if (this.atualPage < this.totalPages+this.pageSumIndex) {
        this.atualPage++;
      }
    }

    prevPage() {
      if (this.atualPage > 1) {
        this.atualPage--;
      }
    }

    getPaginationData() {
      return {
        totalPages: this.totalPages,
        atualPage: this.atualPage+this.pageSumIndex,
        itensPerPage: this.itensPerPage
      }
    }

    end() {
      return this.atualPage == this.totalPages+this.pageSumIndex;
    }
  
    getDataset() {
      return this.data;
    }
  
    setDataset(dataset:any) {
      this.data = dataset;
    }
  
}