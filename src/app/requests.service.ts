import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
	providedIn: "root",
})
export class RequestsService {
	base = `https://swapi.dev/api`;

	constructor(private service: HttpClient) { }

	headers() {
		const header: any = {};
		return new HttpHeaders(header);
	}

	getListFilms(): any {
		const requestHeaders = this.headers();
		return this.service.get<any>(`${this.base}/films`, {
			headers: requestHeaders,
		})
	}
	getListPeople(): any {
		const requestHeaders = this.headers();
		return this.service.get<any>(`${this.base}/people`, {
			headers: requestHeaders,
		})
	}
	getListPlanets(): any {
		const requestHeaders = this.headers();
		return this.service.get<any>(`${this.base}/planets`, {
			headers: requestHeaders,
		})
	}
	getListVeicles(): any {
		const requestHeaders = this.headers();
		return this.service.get<any>(`${this.base}/vehicles`, {
			headers: requestHeaders,
		})
	}

	getFilmByUrl(url: string): any {
		const requestHeaders = this.headers();
		return this.service.get<any>(url, {
			headers: requestHeaders,
		})
	}
	getCharacterByUrl(url: string): any {
		const requestHeaders = this.headers();
		return this.service.get<any>(url, {
			headers: requestHeaders,
		})
	}
}

