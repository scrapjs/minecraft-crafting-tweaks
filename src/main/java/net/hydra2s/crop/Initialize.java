package net.hydra2s.crop;

//
import net.fabricmc.api.ModInitializer;
import net.hydra2s.crop.code.FuelMod;

//
public class Initialize implements ModInitializer {
    public FuelMod fuelMod = null;

    @Override
    public void onInitialize() {
        this.fuelMod = new FuelMod();
    }
}
