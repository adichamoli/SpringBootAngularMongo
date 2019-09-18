package Events.EventsBackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import Events.EventsBackend.models.EventsParams;
import Events.EventsBackend.models.EventsRepository;

@Service
public class EventsService {
	@Autowired
	private EventsRepository eventsRepository;
	
	public List<EventsParams> getAllEvents() {
		return eventsRepository.findAll();
	}

    private Sort sortByIdAsc() {
        return new Sort(Sort.Direction.ASC, "eventId");
    }
    
	public EventsParams save(EventsParams eventsparams) {
		return eventsRepository.save(eventsparams);
		
	}
	
	public void delete(String id) {
		System.out.println("delete Event 2");
		eventsRepository.delete(id);
	}	
}
