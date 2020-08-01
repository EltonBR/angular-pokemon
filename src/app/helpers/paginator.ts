export class Paginator {
    private totalPages: number;
    private lastPageCountItens: number;
    private atualPage = 0;
    private pageSumIndex = 0;

    constructor(private data: any, private itensPerPage: number = 30) {
      this.totalPages = parseInt((data.length / itensPerPage).toString(), 10);
      this.lastPageCountItens = data.length % itensPerPage;
      if (this.lastPageCountItens > 0) {
        this.pageSumIndex = +1;
      }
    }

    getPageData(): any[] {
        if (this.atualPage > this.totalPages) {
          return this.data.slice(this.data.length - this.lastPageCountItens, this.data.length);
        } else {
          return this.data.slice(this.atualPage * this.itensPerPage, (this.atualPage * this.itensPerPage) + this.itensPerPage);
        }
    }
    setPage(page: number): void {
      this.atualPage = page;
    }

    nextPage(): void {
      if (this.atualPage < this.totalPages + this.pageSumIndex) {
        this.atualPage++;
      }
    }

    prevPage(): void {
      if (this.atualPage > 1) {
        this.atualPage--;
      }
    }

    getPaginationData(): any {
      return {
        totalPages: this.totalPages,
        atualPage: this.atualPage + this.pageSumIndex,
        itensPerPage: this.itensPerPage
      };
    }

    end(): boolean {
      return this.atualPage === this.totalPages + this.pageSumIndex;
    }

    getDataset(): any[] {
      return this.data;
    }

    setDataset(dataset: any): void {
      this.data = dataset;
    }

}
