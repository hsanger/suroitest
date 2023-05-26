import { type ObjectDefinition, ObjectDefinitions } from "../utils/objectDefinitions";

export interface BulletDefinition extends ObjectDefinition {
    readonly damage: number
    readonly obstacleMultiplier: number
    readonly speed: number
    readonly speedVariance: number
    readonly maxDistance: number
}

export const Bullets = new ObjectDefinitions<BulletDefinition>(
    1,
    [
        {
            idString: "ak47_bullet",
            damage: 8.5,
            obstacleMultiplier: 2.5,
            speed: 1,
            speedVariance: 0,
            maxDistance: 1000
        }
    ]
);
