import Marker from '../models/marker.js';
import mongoose from "mongoose";

export const getMarkers = async (req, res) => {
    const { trailId } = req.query;  // Get trail ID from query parameters
    try {
        const markers = await Marker.find({ trail: trailId });  // Find markers by trail
        res.status(200).json(markers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


export const createMarker = async (req, res) => {
    const {name, lat, lng, description, videoUrl, trailId} = req.body;
    const marker = new Marker({
        name,
        lat,
        lng,
        description,
        videoUrl,
        trail: trailId  // Assigning the trail ID from the request to the marker
    });
    try {
        await marker.save();
        res.status(201).json(marker);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

    export const updateMarker = async (req, res) => {
        const {id: _id} = req.params;
        const marker = req.body;

        if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No marker with that id');

        const updatedMarker = await Marker.findByIdAndUpdate(_id, marker, {new: true});
        res.json(updatedMarker);
    };

    export const deleteMarker = async (req, res) => {
        const {id} = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No marker with that id');

        await Marker.findByIdAndRemove(id);
        res.json({message: 'Marker deleted successfully'});
    };

export const getMarkersByTrail = async (req, res) => {
    const { trailId } = req.query; // Get trail ID from query parameters

    try {
        const markers = await Marker.find({ trail: trailId }); // Find markers by trail
        res.status(200).json(markers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
