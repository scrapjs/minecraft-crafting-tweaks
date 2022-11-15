package net.hydra2s.crop;

//
import net.fabricmc.api.ModInitializer;
import net.hydra2s.crop.code.DataPacks;
import net.hydra2s.crop.code.FuelMod;

//
public class Initialize implements ModInitializer {
    public FuelMod fuelMod = null;
    public DataPacks dataPacks = null;

    @Override
    public void onInitialize() {
        this.dataPacks = new DataPacks();
        this.fuelMod = new FuelMod();
    }
}
