//att1
abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    private tasks: Set<string> = new Set();

    addTask(task: string): void {
        this.tasks.add(task);
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

class DailyTasks extends TaskManager {
    private tasks: Set<string> = new Set();

    addTask(task: string): void {
        this.tasks.add(task);
    }

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}

//att2
abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    private inventory: Record<string, number> = {};

    addItem(item: string, quantity: number): void {
        if (this.inventory[item]) {
            this.inventory[item] += quantity;
        } else {
            this.inventory[item] = quantity;
        }
    }

    removeItem(item: string): void {
        delete this.inventory[item];
    }

    getInventory(): Record<string, number> {
        return this.inventory;
    }
}

class StoreInventory extends Inventory {
    private inventory: Record<string, number> = {};
    private readonly MAX_QUANTITY = 10;

    addItem(item: string, quantity: number): void {
        if (this.inventory[item]) {
            if (this.inventory[item] + quantity <= this.MAX_QUANTITY) {
                this.inventory[item] += quantity;
            } else {
                console.log(`Impossível adicionar ${quantity} of ${item}. Maximum limit reached.`);
            }
        } else {
            if (quantity <= this.MAX_QUANTITY) {
                this.inventory[item] = quantity;
            } else {
                console.log(`Impossível adicionar ${quantity} of ${item}. Maximum limit reached.`);
            }
        }
    }

    removeItem(item: string): void {
        delete this.inventory[item];
    }

    getInventory(): Record<string, number> {
        return this.inventory;
    }
}

//att3
abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    private favorites: Set<string> = new Set();

    addFavorite(item: string): void {
        this.favorites.add(item);
    }

    getFavorites(): string[] {
        return Array.from(this.favorites).sort();
    }
}

class BooksFavoriteManager extends FavoriteManager {
    private favorites: string[] = [];

    addFavorite(item: string): void {
        this.favorites.unshift(item); 
    }

    getFavorites(): string[] {
        return this.favorites;
    }
}

//att4
abstract class SistemaDeVotacao {
    abstract votarPor(candidato: string): void;
    abstract obterResultados(): object;
}

class Eleicao extends SistemaDeVotacao {
    private votos: Record<string, number> = {};

    votarPor(candidato: string): void {
        if (this.votos[candidato]) {
            this.votos[candidato]++;
        } else {
            this.votos[candidato] = 1;
        }
    }

    obterResultados(): object {
        return this.votos;
    }
}

class Pesquisa extends SistemaDeVotacao {
    private votos: Record<string, number> = {};

    votarPor(candidato: string): void {
        if (this.votos[candidato]) {
            this.votos[candidato]++;
        } else {
            this.votos[candidato] = 1;
        }
    }

    obterResultados(): object {
        return Object.entries(this.votos)
            .sort((a, b) => b[1] - a[1])
            .reduce((acc, [candidato, contagem]) => {
                acc[candidato] = contagem;
                return acc;
            }, {} as Record<string, number>);
    }
}