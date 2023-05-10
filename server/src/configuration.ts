/*
Copyright (C) 2023 Henry Sanger (https://suroi.io)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import * as fs from "fs";

/**
 * Read a JSON file.
 * @param path The path to the JSON file.
 */
export const readJSON = <T>(path: string): T => JSON.parse(fs.readFileSync(path, "utf-8")) as T;

export interface Configuration {
    host: string
    port: number
    ssl: {
        keyFile: string
        certFile: string
        enable: boolean
    }
    movementSpeed: number
    diagonalSpeed: number
    debug: Record<string, unknown>
}

export const Config = readJSON<Configuration>("config.json");
Config.diagonalSpeed = Config.movementSpeed / Math.SQRT2;