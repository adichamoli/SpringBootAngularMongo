package Events.EventsBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Events.EventsBackend.models.EventsParams;
import Events.EventsBackend.models.EventsRepository;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class EventsController {

    @Autowired
    EventsRepository eventsRepository;
    
    @GetMapping("/readall")
    public List<EventsParams> getItems() {
        return eventsRepository.findAll();
    }    
    
    @PostMapping("/createevent")
    public EventsParams createEvent(@Validated @RequestBody EventsParams eventsparams) {
    	System.out.println("Create Event");
        return eventsRepository.save(eventsparams);
    }
    
    @DeleteMapping("/events/{id}")
    public EventsParams delete(@PathVariable String id) {
    	System.out.println(id);
    	eventsRepository.delete(id);
        return null;
    }
    
    @PutMapping("/updateevent/{id}")
    public EventsParams updateEvent(@PathVariable String id, @Validated @RequestBody EventsParams eventsparams){
    	System.out.println(id);
    	EventsParams eventsparams1 = eventsRepository.findOne(id);
    	if(eventsparams.getEventName() != null)
    		eventsparams1.setEventName(eventsparams.getEventName());
    	
    	if(eventsparams.getEventType() != null)
    		eventsparams1.setEventType(eventsparams.getEventType());
    	
    	if(eventsparams.getEventDate() != null)
    		eventsparams1.setEventDate(eventsparams.getEventDate());
    
    	if(eventsparams.getEventFrequency() != null)
    		eventsparams1.setEventFrequency(eventsparams.getEventFrequency());
    	
    	if(eventsparams.getEventAmount() != null)
    		eventsparams1.setEventAmount(eventsparams.getEventAmount());
    	
    	if(eventsparams.getEventDescription() != null)
    		eventsparams1.setEventDescription(eventsparams.getEventDescription());
    	
    	return eventsRepository.save(eventsparams1);
    }
}
