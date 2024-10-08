import fetch from 'node-fetch';

const BASE_URL = 'https://challenge.crossmint.io/api';
const candidateId = '95924c75-9a76-407b-b0b6-826871b81c1c';

class Megaverse {
    static async makeRequest(endpoint, method, body = null) {
        try {
            const options = {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            if (body) {
                options.body = JSON.stringify(body);
            }

            const response = await fetch(`${BASE_URL}${endpoint}`, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    static async createPolyanet(row, column) {
        return this.makeRequest('/polyanets', 'POST', { row, column, candidateId });
    }

    static async deletePolyanet(row, column) {
        return this.makeRequest('/polyanets', 'DELETE', { row, column, candidateId });
    }

    static async createSoloon(row, column, color) {
        return this.makeRequest('/soloons', 'POST', { row, column, color, candidateId });
    }

    static async deleteSoloon(row, column) {
        return this.makeRequest('/soloons', 'DELETE', { row, column, candidateId });
    }

    static async createCometh(row, column, direction) {
        return this.makeRequest('/comeths', 'POST', { row, column, direction, candidateId });
    }

    static async deleteCometh(row, column) {
        return this.makeRequest('/comeths', 'DELETE', { row, column, candidateId });
    }

    static async getGoalMap() {
        return this.makeRequest(`/map/${candidateId}/goal`, 'GET');
    }
}

export default Megaverse;